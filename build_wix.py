import re

def build_wix_file():
    # Read files
    with open('index.html', 'r') as f:
        html = f.read()
    with open('style.css', 'r') as f:
        css = f.read()
    with open('script.js', 'r') as f:
        js = f.read()

    # Base URL for GitHub Pages
    base_url = "https://tosinirl.github.io/IRLMEDIA/"

    # Replace CSS Link with inline CSS
    # Handle the specific background image in CSS first
    css = css.replace("url('hero_bg.jpg')", f"url('{base_url}hero_bg.jpg')")
    
    style_tag = f"<style>\n{css}\n</style>"
    html = html.replace('<link rel="stylesheet" href="style.css">', style_tag)

    # Replace JS Script tag with inline JS
    script_tag = f"<script>\n{js}\n</script>"
    # Note: index.html has <script src="script.js"></script> usually at the end
    html = html.replace('<script src="script.js"></script>', script_tag)

    # Replace Image URLs in HTML
    # We want to replace src="filename.jpg" with src="BASE_URL/filename.jpg"
    # But NOT src="http..." or src="https..."
    
    def replacer(match):
        quote = match.group(1)
        filename = match.group(2)
        if filename.startswith('http') or filename.startswith('data:'):
            return match.group(0) # No change
        return f'src={quote}{base_url}{filename}{quote}'

    # Regex to find src="filename" or src='filename'
    # non-greedy match for filename
    html = re.sub(r'src=(["\'])(.*?)\1', replacer, html)

    # Write output
    with open('wix-ready.html', 'w') as f:
        f.write(html)
    
    print("Successfully created wix-ready.html")

if __name__ == "__main__":
    build_wix_file()
