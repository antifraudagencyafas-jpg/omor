import os
import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Fix product names (OMC-XX 123 -> OMC-XX123)
    content = re.sub(r'OMC-([A-Z]+)\s+([0-9]+)', r'OMC-\1\2', content)

    # Fix technical terms in display text (Slurry-Resistant -> Slurry Resistant)
    # Be careful not to touch slugs or class names.
    # Usually these are in uppercase or title case in the name field or in prose.

    # List of terms to fix
    terms = [
        ('SLURRY-RESISTANT', 'SLURRY RESISTANT'),
        ('Slurry-Resistant', 'Slurry Resistant'),
        ('HIGH-PRESSURE', 'HIGH PRESSURE'),
        ('High-Pressure', 'High Pressure'),
        ('HEAVY-DUTY', 'HEAVY DUTY'),
        ('Heavy-Duty', 'Heavy Duty'),
        ('HIGH-TEMPERATURE', 'HIGH TEMPERATURE'),
        ('High-Temperature', 'High Temperature'),
    ]

    for old, new in terms:
        # Avoid replacing in hrefs, src, or class names if possible by checking context
        # Or just replace and then fix the broken ones if any.
        content = content.replace(old, new)

    # Fix broken links if the replacement touched them (unlikely for these specific terms in OMC category)
    # But let's restore hyphens in hrefs and slugs if they were accidentally changed to spaces
    content = re.sub(r'(href|slug|link|src)="(.*?)"', lambda m: m.group(0).replace(' ', '-'), content)

    with open(filepath, 'w') as f:
        f.write(content)

def main():
    base_dir = 'app/products/omc-centrifugal-pumps'

    # Fix main listing page
    fix_file(os.path.join(base_dir, 'page.tsx'))

    # Fix individual product pages
    for root, dirs, files in os.walk(base_dir):
        for file in files:
            if file == 'page.tsx':
                fix_file(os.path.join(root, file))

if __name__ == "__main__":
    main()
