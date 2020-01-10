import React from 'react'
import 'moment/locale/zh-cn';

import '../../assets/css/common/common-edit.less'
import HtmlEditor from "../../common/HtmlEditor";


export default class PaperCoverEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: parseInt(this.props.match.params.id),
            news: {}
        };
    }


    syncContent = (content) => {
        let {news = {}} = this.state;
        this.setState({
            news: {
                ...news,
                content
            }
        })
    };

    render() {
        let {id, news = {}} = this.state;
        let {title = '', content = '', type = 1} = news;

        console.log(content);

        return <div className="common-edit-page">

            <HtmlEditor content={content} withoutTools={true} syncContent={this.syncContent}/>
        </div>
    }
}