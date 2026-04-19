# Prague AI Workshop — Internal Sync Site

Internal planning site for the workshop **"AI at the Bedside: Clinical Reasoning in the Age of LLMs"** at the Prague Autoimmunity Congress.

**Speakers:** Yoad Dvir · Or Shoenfeld · Daphna Idan · Itamar Ben Shitrit

## Deploy to GitHub Pages

```bash
cd C:/Users/yoad.dvir/Documents/GitHub/prague-workshop
git init
git add .
git commit -m "Initial workshop sync site"
gh repo create prague-workshop --public --source=. --push
gh api repos/yoad-dvir/prague-workshop/pages -X POST \
  -f 'source[branch]=main' -f 'source[path]=/'
```

Live at: `https://yoad-dvir.github.io/prague-workshop/`

## Edit

Single-file site — open `index.html` in any browser, edit, push.
