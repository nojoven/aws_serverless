var messages = ["Hi, World", "Hi Serverless", "Good Morning"]

exports.handler = async (event) => {
    let message = messages[0];
    // TODO implement
    const response = {
        statusCode: 200,
        body: message,
    };
    return response;
};
