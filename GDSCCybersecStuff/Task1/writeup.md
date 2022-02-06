## The Challenge

We are given a WAV file, and we need to find information hidden in it which will save a particular employee of a company from being arrested.

## How I Decided to Go About It

- The first thing I did was open the .wav file in Audacity to check if the waveforms resembled some shape. I confirmed that there was no identifiable pattern in the shape of the waveforms.
- The next thing I did was to actually listen to the file. This file sounded very similar to the sounds we get when we press numbers on a dial pad. These are called DTMF tones.
- I used https://unframework.github.io/dtmf-detect/ to get the numbers dialed, and this gave me a really long number which looked something like this 11631400670740375753322763532480716737685517086473090911690760345257334690167165.
- I had no idea what I had to do with the number, and like any other person would, started to Google. I searched CTF guides for what I could do with really long numbers like this, but most of them didn't work.
- I threw the number into CyberChef https://gchq.github.io/CyberChef hoping to get something with the Magic reciple, but it was of no use.
- After a really long time, I eventually stumbled upon this website: https://captainmich.github.io/programming_language/CTF/Challenge/CryptoHack/general.html This website had a python script which I tried to run, as the numbers were massive in both places. And surprisingly enough, I got the answer.
- Flag: dsc{b33p_b00p_r3c0rd5_3v3ryth1n9}
