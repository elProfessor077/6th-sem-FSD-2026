import fs from 'fs/promises';

const fileStatus = async (path) => {
    try {
        const stats = await fs.stat(path);
        console.log(stats.size);
        console.log(stats.isFile());
        console.log(stats.isDirectory());


    }catch (error) {
        console.log("unable to get the status of the file or directory due to some error");
    }
}
fileStatus("../day_03");