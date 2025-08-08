// prefer IPv4 so Node doesn't pick an IPv6 address that can flap
import dns from "node:dns";
try { dns.setDefaultResultOrder("ipv4first"); } catch {}
