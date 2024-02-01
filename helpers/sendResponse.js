export default async function sendResponse(res, resData) {
   try {
    res.status(resData?.statusCode).json({
        success: resData?.success,
        statusCode: resData?.statusCode,
        message: resData?.message,
        data: resData?.data || null
    })
   } catch (error) {
    res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Internal Sever Error",
        data: null
    })
   }
}