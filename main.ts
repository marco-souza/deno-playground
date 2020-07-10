#! /usr/bin/env deno run --allow-net
import { parse } from "https://deno.land/std/flags/mod.ts";

async function main() {
  const args = parse(Deno.args);
  const base = args.b || "USD";
  const quantity = args.q || 1;
  const outputCurrency = args._[0] || "BRL";
  const DOL_API_URL = `https://api.exchangeratesapi.io/latest?base=${base}`;

  const response = await fetch(DOL_API_URL);
  const result = await response.json();
  const rates = result.rates;

  if (!rates) throw "No rate found";

  if (args.a) {
    console.log(rates);
  } else {
    const rate = rates[outputCurrency];

    if (!rate) throw "output currency not found";

    const result = (rate * quantity).toFixed(3);

    console.log(result);
  }
}

if (import.meta.main) {
  main();
}
