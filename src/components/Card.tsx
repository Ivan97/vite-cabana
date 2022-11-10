import _ from 'lodash';

interface CardProps {
    title?: string;
    content?: string | string[];
}

function Card(props: CardProps) {
    const content = props.content
    return (
        <div
            className={'border-4 mt-4 transform duration-500 rounded-2xl hover:shadow-2xl hover:shadow-gray-300 divide-y-4'}>
            <div className={'font-bold text-xl mt-2 uppercase'}>{props.title || 'hello world'}</div>
            <div className={'text-xl my-2'}>
                {content
                    ? _.isArray(content)
                        ? _.map(content, i => <div>{i}</div>)
                        : <div>{content}</div>
                    : 'content here'}
            </div>
        </div>
    )
}

export default Card;
