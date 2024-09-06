import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps();
    const { svgURL, id } = attributes;

    const onSelectSVG = (media) => {
        // Only allow SVG images
        if (media && media.url && media.url.endsWith('.svg')) {
            setAttributes({ svgURL: media.url });
        }
    };

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title={__('SVG Object Settings', 'svg-object-block')}>
                    <TextControl
                        label={__('ID Attribute', 'svg-object-block')}
                        value={id}
                        onChange={(value) => setAttributes({ id: value })}
                        help={__('Enter an id for the <object> element.', 'svg-object-block')}
                    />
                </PanelBody>
            </InspectorControls>
            { !svgURL ? (
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={ onSelectSVG }
                        allowedTypes={ ['image/svg+xml'] }
                        render={ ({ open }) => (
                            <Button onClick={ open } variant="primary">
                                { __('Choose SVG', 'svg-object-block') }
                            </Button>
                        ) }
                    />
                </MediaUploadCheck>
            ) : (
                <div className="svg-preview">
                    <object data={ svgURL } type="image/svg+xml" id={ id } />
                    <Button
                        onClick={() => setAttributes({ svgURL: '' })}
                        variant="secondary"
                    >
                        { __('Remove SVG', 'svg-object-block') }
                    </Button>
                </div>
            ) }
        </div>
    );
}
