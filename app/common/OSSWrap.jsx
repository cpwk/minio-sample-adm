import OSS from './OSS.jsx';
import App from './App.jsx';

let OSSWrap = {
    upload: function (file, namespace) {
        return App.api('adm/file/upload_token', {
            'fileName': file.name,
            'fileSize': file.size,
            namespace
        }).then((cfg) => {
            return OSS.putObject(cfg, file, {}).then(() => {
                return cfg;
            });
        });
    }
};

export default OSSWrap;
