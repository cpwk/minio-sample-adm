let CTYPE = (() => {

    let maxlength = {title: 140, intro: 500};

    let minlength = {title: 1, intro: 1};


    let eidtMaxWidth = 1800;

    let eidtMinWidth = 900;


    let formStyle = {minWidth: eidtMinWidth, maxWidth: eidtMaxWidth, marginTop: '20px'};

    return {

        minprice: 0,
        maxprice: 1000000,

        eidtMaxWidth: 1800,

        eidtMinWidth: 900,

        maxlength: maxlength,

        minlength: minlength,
        pagination: {pageSize: 20},

        formStyle,

        commonPagination: {showQuickJumper: true, showSizeChanger: true, showTotal: total => `总共 ${total} 条`},

        fieldDecorator_rule_title: {
            type: 'string',
            required: true,
            message: `标题长度为${minlength.title}~${maxlength.title}个字`,
            whitespace: true,
            min: minlength.title,
            max: maxlength.title
        },

        expirePeriods: [{key: '1D', label: '一天'},
            {key: '3D', label: '三天'},
            {key: '1W', label: '一周'},
            {key: '1M', label: '一个月'},
            {key: '3M', label: '三个月'},
            {key: '6M', label: '六个月'},
            {key: '1Y', label: '一年'},
            {key: '2Y', label: '两年'},
            {key: '3Y', label: '三年'},
            {key: '5Y', label: '五年'},
            {key: '10Y', label: '十年'}],

        link: {

            admin_admins: {key: '/app/admin/admins', path: '/app/admin/admins', txt: '管理员'},
            admin_roles: {key: '/app/admin/roles', path: '/app/admin/roles', txt: '权限组'}
        },

        //图片裁切工具比例
        imgeditorscale: {
            square: 1,
            rectangle_v: 1.7778,
            rectangle_h: 0.5625,
        },

        namespace: {
            file: 'file',
            avatar: 'avatar'
        },

        formItemLayout: {
            labelCol: {
                xs: {span: 24},
                sm: {span: 3},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        },
        dialogItemLayout: {
            labelCol: {
                xs: {span: 24},
                sm: {span: 4},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        },
        shortFormItemLayout: {
            labelCol: {
                xs: {span: 24},
                sm: {span: 3},
            },
            wrapperCol: {
                xs: {span: 4},
                sm: {span: 3},
            },
        },
        longFormItemLayout: {
            labelCol: {
                xs: {span: 24},
                sm: {span: 6},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
        },
        tailFormItemLayout: {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 3,
                },
            },
        },

        REGION_PATH: 'http://fs.maidaotech.cn/assets/js/pca-code.json',
        bannerType: {
            HOME_PC: 1, JAVA_PRY_PC: 3, JAVA_ADV_PC: 5, SERVICE_PC: 7, REACT_PC: 9, ABOUT_PC: 11
        },

    }

})();

export default CTYPE;
