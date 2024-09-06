import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { svgURL, id } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <div {...blockProps}>
            { svgURL && (
                <object data={ svgURL } type="image/svg+xml" id={ id } />
            ) }
        </div>
    );
}
