# Dol

Simple cli tool to give you exchange rates for dollar (and some other currencies).

## Usage

To install:

```bash
deno install --allow-net -n dol https://raw.githubusercontent.com/marco-souza/dol/master/main.ts
```

To use:

```bash
dol               # DOL -> BRL
dol EUR           # DOL -> EUR
dol -b BRL EUR    # BRL -> EUR
dol -a            # DOL -> all available currencies
```
