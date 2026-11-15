exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: "Tumia POST kwa jaribio." })
    };
  }

  let data;

  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Taarifa si sahihi." })
    };
  }

  if (data.mode !== "demo") {
    return {
      statusCode: 400,
      body: JSON.stringify({ success: false, message: "Jaribio pekee linaruhusiwa." })
    };
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      success: true,
      demo: true,
      message: "Jaribio limefanikiwa. Hakuna malipo yaliyopokelewa."
    })
  };
};
