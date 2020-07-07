#! /usr/bin/env deno run --allow-net
import { parse } from "https://deno.land/std/flags/mod.ts";

async function main() {
  const args = parse(Deno.args);
  const base = args.b || "USD";
  const outputCurrency = args._[0] || "BRL";
  const DOL_API_URL = `https://api.exchangeratesapi.io/latest?base=${base}`;

  const response = await fetch(DOL_API_URL);
  const result = await response.json();

  if (args.a) {
    console.log(result.rates);
  } else {
    console.log(result.rates[outputCurrency] || "not_found");
  }
}

if (import.meta.main) {
  main();
}
