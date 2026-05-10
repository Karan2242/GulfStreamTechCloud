import glob, os
root = r'C:\Users\Pramod Deshpande\Desktop\website-nextjs'
count = 0
for path in glob.glob(os.path.join(root, 'src', 'app', '**', '*.jsx'), recursive=True):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    if '],,' in content:
        updated = content.replace('],,', '],')
        with open(path, 'w', encoding='utf-8') as f:
            f.write(updated)
        print(f'Fixed {os.path.relpath(path, root)}')
        count += 1
print(f'Total fixed: {count}')
