## The Challenge

We are given a png file, and asked to uncover the secret behind it (basically a steg challenge)

## How I Solved the Challenge

- The first thing which I did, like in most steg challenges, was to take a look at the EXIF data for the given png file.
- On using exiftool on the given png, we can immediately see something peculiar. The copyrights, rights, and copyright notice fields all have the base64 encoded string as their value. On decoding this base64 value, we get "the_train_arrives_at_7_AM_tommorow". Something interesting that could perhaps be used later.
- Now the next course of action is to usually check for hidden files. We can use something called binwalk for this. On running binwalk on the given png file, we can see that there is a hidden zlib file, tiff, zip, and a pdf. The zlib and and tiff can be discared for the timebeing as they are just related to the original png itself. The zip and pdf on the other hand, look very interesting.
- We can extract these "hidden" files by passing the -e flag to binwalk. As expected, we get a pdf and zip file among the other output files. On extracting the zip, we get another pdf file (its actually just the same pdf as the other one). 
- Now, when we try opening the pdf, it asks us for a password. Hmmmm, maybe we could use that weird message "the_train_arrives_at_7_AM_tommorow" we got earlier from the EXIF data? Entering that as the password and, lo and behold, we successfully managed to unlock the pdf.
- The only thing in the pdf is lovely looking flag
- Flag: gdsc{y0u_m4d3_1t_th15_f4r_gr34t_j0b}
