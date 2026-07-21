export function getProfile(req: any, res: any) {

    res.status(200).json({
        message: "Profile accessed successfully.",
        user: req.user
    });

}