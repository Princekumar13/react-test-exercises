import classNames from "classnames";
import { Input, Table } from "reactstrap";
import MultipleBarChart from "../components/MultipleBarChart";
import { TextData } from "../constants/appConstant";
import { useState } from "react";

const Exercisetwo = () => {

    const [textData, setTextData] = useState(TextData);

    const handleSearch = (inputVal) => {
        if(inputVal !== '') {
            const textDataVal = TextData;
            const result = textDataVal.filter(item => item.question.toLowerCase().includes(inputVal.toLowerCase()));
            setTextData(result);
        } else {
            setTextData(TextData);
        }
    }

    return (
        <div className="container mt-5">
            <div className="table-header d-flex justify-content-between">
                <h3 className="headiing">Text Questions Data</h3>

                <div className="search-wrapper">
                    <i className="fa fa-search"></i>
                    <Input
                        type="text"
                        name="serach"
                        placeholder="Search for QP#" 
                        className="form-control ps-5"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>
            </div>

            <div className="table-wrapper mt-4">
                <Table>
                    <thead>
                        <tr>
                            <th className="text-start text-nowrap">Sr. #</th>
                            <th className="text-start text-nowrap"># of Participants</th>
                            <th className="text-start text-nowrap">Questions</th>
                            <th className="text-start text-nowrap">Answer Options</th>
                            <th className="text-start text-nowrap">Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            textData.map((data, index) => {
                                return (
                                    <tr className={classNames({ 
                                        'table-light': (index+1)%2 !== 0, 
                                        'table-info': (index+1)%2 === 0
                                    })} key={index}>
                                        <td className="text-start">
                                            {data.id}
                                        </td>
                                        <td className="text-start">
                                            {data.noOfParticipants}
                                        </td>
                                        <td className="text-start">
                                            <span dangerouslySetInnerHTML={{ __html: data.question }} />
                                        </td>
                                        <td className="text-start">
                                            {
                                                data.answerOptions.map((answer, i) => {
                                                    return (
                                                        <div key={i}>{answer}</div>
                                                    )
                                                })
                                            }
                                        </td>
                                        <td className="text-start">
                                            {
                                                data.percentage.map((percentageVal, i) => {
                                                    return (
                                                        <div key={i}>{percentageVal}%</div>
                                                    )
                                                })
                                            }
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            
            {/* Multiple Bars chart representation */}
            <div className="mt-5">
                <MultipleBarChart textData={textData} />
            </div>

        </div>        
    )
}

export default Exercisetwo;