export const GET = async () => {
  try {
    const res = await fetch(
      "https://docs.google.com/document/d/1NSxZm97XbjgARhZtUimbjL-DpRXMQCVHK6s4QZHmhKc/export?format=pdf"
    );

    if (res.ok) {
      const blob = await res.blob();
      return new Response(blob, {
        headers: {
          "Content-Type": "application/pdf",
        },
      });
    } else {
      return new Response("Error fetching the document", { status: 500 });
    }
  } catch (error) {
    // @ts-expect-error err
    return new Response(error.message, { status: 500 });
  }
};
