import type { Chain } from "../src/types";
export default {
  "name": "Kanazawa",
  "title": "Meld Testnet Kanazawa",
  "chain": "MELD",
  "rpc": [
    "https://kanazawa.rpc.thirdweb.com/${THIRDWEB_API_KEY}",
    "https://rpc-kanazawa.meldlabs.dev/ext/bc/2Ci7VYrUd4fTBqGA5D2HA6UPHzQ4LQyr8rZQww9MGSv9rNkRzn/rpc"
  ],
  "faucets": [],
  "features": [],
  "nativeCurrency": {
    "name": "gMeld",
    "symbol": "gMELD",
    "decimals": 18
  },
  "infoURL": "https://meld.com",
  "shortName": "meld",
  "chainId": 222000222,
  "networkId": 222000222,
  "explorers": [],
  "testnet": true,
  "slug": "kanazawa"
} as const satisfies Chain;