The idea behind the project is to make a command line interface project:

Project Subtasks:
refer to tasks.md file:

1. help:
    this command will print all the command this project supports so that user can correctly input the commnad.

2. organise:
    this command will cut the old file and will replace the file into its type folder,
    for eg:

    suppose a folder is there where we are running the above command so it will move the file into new folder according to the following file extention :
    media: ["mp4", "mkv"],

    photos: ['jpg', 'jfif', 'jpeg', 'pjp', 'pjpeg'],

    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],

    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],

    app: ['exe', 'dmg', 'pkg', "deb"]

3. tree:
    this print the tree structure of the directory.

    then we make this project global so that any user can use it in cli.

then before pushing the code to github repo, we  will follow some good practises of development.