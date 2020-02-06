import React from 'react';
import { tableValues } from './lib/SnakeTableHelper';

const SnakeTable = (props) => {
    const { color } = props;
    const { n, x, m, w, ltr } = props;
    const { showConfigure } = props;

    const cellValues = [...tableValues(n, x, m, ltr)].reverse();
    const tableStyle = {width: `${w}%`};

    const handleConfigureClick = () => {
        showConfigure(color);
    }
    return (
        <div
            className={`snake-table snake-table--${color}`}
            style={tableStyle}
        >
            <table className="snake-table__table table is-bordered">
                <tbody>
                {cellValues.map((row, trIdx) =>
                    <tr key={trIdx}>
                        {row.map((cellValue, tdIdx) =>
                            <td key={tdIdx} className={cellValue == null ? 'void' : ''}>
                                {cellValue}
                            </td>
                        )}
                    </tr>
                )}
                </tbody>
            </table>
            <div className="button-row">
                <button
                    className="button"
                    onClick={handleConfigureClick}
                >
                    Configure
                </button>
                <div className="width-display">{w}%</div>
            </div>
        </div>
    )
}

export default SnakeTable;