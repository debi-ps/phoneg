# debi-ps/phoneg

During network pain test I met the case of setting phone number as an access point's root pre-shared password. It's not safe at all, however, I did not find suitable wordlist on the internet. No wonder, because APs are based in different countries with different region and country codes. Also phones could be written in many styles.

In many cases we do not need the large set of all possible phone numbers: all countries, all region codes, all telephone providers, etc. We want suitable set for our current situation. This is what this application was designed for. Hope it will be usefull.

## Description
This is a CLI application for generating wordlist of phone numbers for bruteforce attacks. It provides generating lists with custom or predefined configurations.

Also package allows to include different phone number's writing styles in one wordlist. For example styles `0680010000`, `380680010000`, <br> `38 068 001 00 00`, etc.

## Requirements
* npm v7.0.5
* node v12.14.0

Note: requirements are based on PC configuration that was used during package developing.

## Installation
```
$ npm i -g phoneg
$ phoneg --help
```

## Usage

### Predefined configuration usage.
The example will generate all possible phone numbers list for UA country.
```
$ phoneg -f ./result.txt -C ua
```

### Predefined configuration usage with multiple writing styles.
```
$ phoneg -f ./result.txt -C ua -t p fp fsp
```

### Custom codes configuration and phones interval.
```
$ phoneg -f ./result.txt -c 380 67 -n 8954444 -m 8959999
```

Result:
```
0678954444
0678954445
0678954446
0678954447
...
0678959999
```

### Countries with predefined configuration
* `ua` - Ukraine

### Available phone styles description
* `p`     - simple phone number  - `0678999999`
* `dp`    - hyphenated `p`       - `067-899-99-99`
* `fp`    - full `p`             - `380678999999`
* `fsp`   - space-separated `fp` - `38 067 899 99 99`
* `fsap`  - `fsp` with addition  - `+38 067 899 99 99`
* `fdsp`  - hyphenated `fsp`     - `38067-899-99-99`
* `fdsap` - `fdsp` with addition - `+38067-899-99-99`

### Contribution
If you found this project usefull and know how to improve it, please provide pull request with your code changes.
I will appreciate it.
