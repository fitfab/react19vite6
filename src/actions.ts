/**
 * Simulating actions form
 *
 */

interface Params {
  text: string;
}

export async function simulateSave(params: Params) {
  console.log(params.text.length > 0);
  return await new Promise((resolve) => {
    if (params.text.length > 0) {
      setTimeout(() => resolve(params), 3000);
    } else {
      console.log("reject", params);
      // reject({ ...params, ...{ error: "Error: Failed to save" } });
      // reject(params);
      setTimeout(() => resolve({ ...params, ...{ error: "Error: Failed to save" } }), 3000);
    }
  });
}
