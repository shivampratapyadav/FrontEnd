let utility ={}
utility.types = {
    media: ["mp4", "mkv"],
    photos: ['jpg', 'jfif', 'jpeg', 'pjp', 'pjpeg'],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

//we are exporting the above utility object by writing below code and will require it
//in organize command code, see there how i am using the above object by requiring the module and catching it in an object.
module.exports = utility;