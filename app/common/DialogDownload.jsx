import React from 'react';
import {Modal} from 'antd';
import '../assets/css/common/common-export.less'
import {Utils} from "./index";

const id_div = 'div-dialog-export';

export default class DialogDownload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            download: this.props.download
        };
    }

    render() {

        let {download = {}} = this.state;
        let {name, url, suffix} = download;

        return <Modal title={`导出${name}`}
                      getContainer={() => Utils.common.createModalContainer(id_div)}
                      visible={true}
                      width={'350px'}
                      onCancel={() => Utils.common.closeModalContainer(id_div)}
                      footer={null}>
            <div className='common-modal-export'>
                <div className={`icon i-${suffix}`}/>
                <a className='tip download' href={url} target='blank'>请点击下载{name}</a>
            </div>

        </Modal>


    }
}
