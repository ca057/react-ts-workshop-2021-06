const LOAD = 1000;
export function expensivePublicKey(): string {
  let publicKey = "failed";
  try {
    // calculate cryptographically secure random values
    // to fake generate load
    for (let i = 0; i < LOAD; i++) {
      const buffer = new Uint32Array(10);
      publicKey = crypto.getRandomValues(buffer).join("").slice(0, 10);
    }
  } catch (err) {
    console.log(err);
  }

  return publicKey;
}
