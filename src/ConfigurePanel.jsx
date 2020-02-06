import React from 'react';
import { commitConfigureChange } from './state/actions';

const ConfigurePanel = (props) => {
    const { closeConfigure } = props;
    const {
        configureColor,
        configureFormState: formState,
        updateConfigureForm,
        commitConfigureChange,
    } = props;

    function handleCancel() {
        closeConfigure();
    }

    function updateField(field, value) {
        const updated = {...formState, [field]: value}
        updateConfigureForm(updated);
    }

    return (
        <div className="configure__panel box">

            <div className="title">
                Table:
                <span className={`table-color-value table-color-value--${configureColor}`}>
                    {configureColor}
                </span>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">N =</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="start"
                                value={formState.n}
                                onInput={e => updateField('n', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">X =</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="step"
                                value={formState.x}
                                onChange={e => updateField('x', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">M =</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="max"
                                value={formState.m}
                                onChange={e => updateField('m', e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">W =</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <input
                                className="input"
                                type="text"
                                placeholder="width"
                                value={formState.w}
                                onChange={e => updateField('w', e.target.value)}
                            />%
                        </div>
                    </div>
                </div>
            </div>

            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label"></label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                        <label className="radio">
                            <input
                                type="radio"
                                name="foobar"
                                checked={formState.ltr}
                                onChange={() => updateField('ltr', true)}
                            />
                            LTR
                        </label>
                        <label className="radio">
                            <input
                                type="radio"
                                name="foobar"
                                checked={!formState.ltr}
                                onChange={() => updateField('ltr', false)}
                            />
                            RTL
                        </label>
                        </div>
                    </div>
                </div>
            </div>

            <button className="button" onClick={commitConfigureChange}>
                Configure
            </button>
            <button className="button" onClick={handleCancel}>
                Cancel
            </button>

        </div>
    )
}

export default ConfigurePanel;