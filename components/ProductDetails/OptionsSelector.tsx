import React, { Fragment } from 'react';


enum OptionsTypeEnum {
    COLOR = "COLOR",
    BUTTON = "BUTTON",
}

interface OptionsDetailsSelector {
    type: OptionsTypeEnum,
    data: string[];
}

interface OptionsSelectorProps {
    options: OptionsDetailsSelector[],
    onOptionSelect: (option: string) => void;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({ options, onOptionSelect }) => {
    return (
        <div className="mb-6">
            {options.map((option, i) => {
                switch (option.type) {
                    case OptionsTypeEnum.COLOR:
                        return (
                            <Fragment key={`${option.type}-${i}`}>
                                <h3 className="text-lg font-semibold mb-2">Color:</h3>
                                <div className="flex space-x-2">
                                    {
                                        option.data.map((elem, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => onOptionSelect(elem)}
                                                    style={{ backgroundColor: elem }}  
                                                    className={`w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2`}>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </Fragment>
                        )
                    case OptionsTypeEnum.BUTTON:
                        return (
                            <Fragment key={`${option.type}-${i}`}>
                                <h3 className="text-lg font-semibold mb-2">Size:</h3>
                                <div className="flex space-x-2">
                                    {
                                        option.data.map((elem, index) => {
                                            return (
                                                <button
                                                    key={index}
                                                    onClick={() => onOptionSelect(elem)}
                                                    className="px-4 py-2 border text-gray-700 rounded-lg hover:bg-gray-200 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200"
                                                >
                                                    {elem}
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                            </Fragment>
                        )
                    default:
                        break;
                }
            })}
        </div>
    );
};

export default OptionsSelector;
