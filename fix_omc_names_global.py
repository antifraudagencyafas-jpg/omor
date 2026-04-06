import os
import re

def fix_file(filepath):
    try:
        with open(filepath, 'r') as f:
            content = f.read()
    except Exception as e:
        print(f"Skipping {filepath}: {e}")
        return

    # Fix product names (OMC-XX 123 -> OMC-XX123)
    content = re.sub(r'OMC-([A-Z]+)\s+([0-9]+)', r'OMC-\1\2', content)

    # Fix technical terms in display text (Slurry-Resistant -> Slurry Resistant)
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
        content = content.replace(old, new)

    # Restore hyphens in technical attributes (href, slug, link, src)
    content = re.sub(r'(href|slug|link|src)="(.*?)"', lambda m: m.group(0).replace(' ', '-'), content)

    with open(filepath, 'w') as f:
        f.write(content)

def main():
    # Fix entire app directory and solar_products.json
    dirs_to_fix = ['app']
    files_to_fix = ['solar_products.json']

    for d in dirs_to_fix:
        for root, dirs, files in os.walk(d):
            for file in files:
                if file.endswith(('.tsx', '.ts', '.js', '.jsx', '.json')):
                    fix_file(os.path.join(root, file))

    for f in files_to_fix:
        if os.path.exists(f):
            fix_file(f)

if __name__ == "__main__":
    main()
