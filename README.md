# Prague AI Workshop — Internal Sync Site

Internal planning site for the workshop **"AI at the Bedside: Clinical Reasoning in the Age of LLMs"** at the Prague Autoimmunity Congress.

Live at: **https://yoad-dvir.github.io/prague-workshop/**

## Speakers

| | Name | Role |
|---|---|---|
| 01 | **Yoad Dvir** | Cyber & AI technologist (Silverfort) — opens + closes |
| 02 | **Or Degany** | MD, Hadassah Medical Center / Tel Aviv University — clinical lead |
| 03 | **Daphna Idan** | MD student & MPH (BGU), Head of Research at Medint, Pediatric ED |
| 04 | **Itamar Ben Shitrit** | MD, MPH, Chief of Staff & medical data analyst (Soroka / BGU) |

## Adding speaker photos

The site references four files under `images/`:

```
images/yoad.jpg
images/or.jpg
images/daphna.jpg
images/itamar.jpg
```

Drop any JPG/PNG into that folder with those names — they'll replace the initial-letter fallback automatically. Any aspect ratio works (cropped to a circle via CSS). Square crops look best.

## Edit & deploy

```powershell
cd C:/Users/yoad.dvir/Documents/GitHub/prague-workshop
# edit index.html
git add .
git commit -m "your message"
git push
```

GitHub Pages rebuilds in ~30 seconds.
