# PDF Parser and Web Scrapper

## Pdf parser

Made by converting the pdf to a text file using an [online pdf converter](https://products.aspose.app/pdf/parser), then analyzing the pdf structure and filtering out the information.

### How it was filtered
In the *SCHEDULE_OF_CLASSES_FALL_2023_June_1.txt file*, every line has x amount of spaces before the first word of the line. Since the pdf is organized in a tablelike structure, the same common element (e.g. section number) would be at the same position throughout the entire file, making it easy to identify and consistent. Then, it was only a matter of retaining the parent of each section (such as the program title and the course code) before populating the data file. 

### Note
Attempts were made using pdf parser libraries such as [pdfminer.six](https://pdfminersix.readthedocs.io/en/latest/) and [PyPDF2](https://pypdf2.readthedocs.io/en/3.0.0/). However, to no avail since the pdf parsers often omit letters and even words, making these libraries unreliable. To see the attempts, go to [scraper.ipynb](https://github.com/Nanoscience202/Codes/tree/main/Python/scraper).

## Web scrapper

Done with the [requests](https://requests.readthedocs.io/en/latest/) library to get the html content for a teacher and with the [beautifulsoup](https://www.crummy.com/software/BeautifulSoup/bs4/doc/) library to get the information.

### How it was done
After parsing the entire pdf file, a simple filter function is used to filter out the unique teachers. From there, I made an array of multiple combinations for each teacher of their first and last name (e.g. ```de Koos, David Robert``` would give ```['de Koos, David Robert', 'de David', 'de Robert', 'Koos David', 'Koos Robert', 'de Koos', ' David Robert']```). Since some teachers on ratemyprofessor have only parts of their full name searchable (some even have nicknames, such as `Greg Muclair` instead of `Gregory Muclair`), the array ensured that many variants of their name would be searched to make sure that the teacher isn't on the website rather than a variant of their names being ignored.

After retrieving the HTML content of the page for a teacher, I analyzed it (I just read it lol) and found the ratings and all relevant information in the second last `<script>` tag. I wrote a simple program to read it and populate the data file.

The score for each teacher is calculated as such:
```
score = round((((avg * nRating) + 5) / (nRating + 2)) * 100 / 5, 1)
```
It's calculated to take into account the number of raters. You add one 5/5 and one 0/5 to the rating to obtain the score. If there are more raters, the 0/5 will have a lesser impact.

e.g. <br/>
Gregory Muclair has a 5/5 rating but only 2 raters. His score is 75.0 <br/>
Kazuo Takei, Luiz has a 4.6 rating with 11 raters. His score is 85.5

More raters make the rating stronger and more accurate.