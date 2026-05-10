import os
root = r'C:\Users\Pramod Deshpande\Desktop\website-nextjs'
replacements = {
    r'src\app\industries\page.jsx': '''            mainEntity: [
            { '@type': 'Question', name: 'Which industries does GulfStream Technologies support?', acceptedAnswer: { '@type': 'Answer', text: 'GulfStream supports retail, healthcare, logistics, technology/SaaS, and professional services enterprises across Saudi Arabia.', } },
            { '@type': 'Question', name: 'Do you provide industry-specific cloud solutions?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We build cloud architectures tailored to regulatory, compliance, and operational requirements for each sector.', } },
            { '@type': 'Question', name: 'Which cloud platforms do you manage?', acceptedAnswer: { '@type': 'Answer', text: 'We manage AWS, Azure, Google Cloud, and Oracle Cloud for industry cloud workloads with consistent governance.', } },
            { '@type': 'Question', name: 'Do you offer a free cloud consultation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer a free cloud assessment that includes cost analysis, security review, and an optimization roadmap.', } },
            { '@type': 'Question', name: 'Why choose GulfStream for Saudi industry cloud solutions?', acceptedAnswer: { '@type': 'Answer', text: 'We combine local Saudi expertise, industry experience, and multi-cloud engineering to deliver reliable enterprise cloud outcomes.', } },
          ]''',
}

def replace_main_entity(text, replacement):
    start = text.find('mainEntity: [')
    if start == -1:
        raise ValueError('mainEntity start not found')
    idx = start
    while idx < len(text) and text[idx] != '[':
        idx += 1
    if idx >= len(text):
        raise ValueError('Opening bracket not found for mainEntity')
    depth = 1
    idx += 1
    while idx < len(text):
        ch = text[idx]
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                end = idx + 1
                if end < len(text) and text[end] == ',':
                    end += 1
                break
        idx += 1
    else:
        raise ValueError('Closing bracket not found for mainEntity')
    return text[:start] + replacement + text[end:]

for relpath, replacement in replacements.items():
    path = os.path.join(root, relpath)
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    updated = replace_main_entity(content, replacement)
    if updated != content:
        with open(path, 'w', encoding='utf-8') as f:
            f.write(updated)
        print(f'Updated {relpath}')
    else:
        print(f'No changes for {relpath}')
