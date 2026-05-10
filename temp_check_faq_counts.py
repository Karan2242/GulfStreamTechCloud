import glob, os
root = r'C:\Users\Pramod Deshpande\Desktop\website-nextjs'
for path in glob.glob(os.path.join(root, 'src', 'app', '**', '*.jsx'), recursive=True):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if "'@type': 'FAQPage'" in content:
        count = content.count("'@type': 'Question'")
        print(f"{os.path.relpath(path, root)}: {count}")
