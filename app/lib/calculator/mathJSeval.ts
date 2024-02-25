"use server";

export async function mathJSeval(equation: string) {
  const encodedEquation = encodeURIComponent(equation);
  const apiUrl = `https://api.mathjs.org/v4/?expr=${encodedEquation}`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.text();
    return result;
  } catch (e: any) {
    return e.message;
  }
}
