import React, { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import styled from 'styled-components';
import LoadingOverlay from './LoadingOverlay';
import Document from '../assets/Gifs/doc.gif';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Registration = () => {
    const [currentSection, setCurrentSection] = useState(0);

    const handleNext = () => {
        setCurrentSection(currentSection + 1);
    };

    const handlePrevious = () => {
        setCurrentSection(currentSection - 1);
    };

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        TLName: '',
        TLDepartment: '',
        TLYear: '',
        TLDOB: '',
        TLNumber: '',
        TLEmail: '',
        TLRegisterNumber: '',
        TLHostelDays: '',
        M1Name: '',
        M1Department: '',
        M1RegisterNumber: '',
        M1Year: '',
        M1DOB: '',
        M1HostelDays: '',
        M2Name: '',
        M2RegisterNumber: '',
        M2Department: '',
        M2Year: '',
        M2DOB: '',
        M2HostelDays: '',
        Abstract: '',
        TeamName: '',
        Title: '',
        Theme: '',
    });

    const [fileUpload, setFileUpload] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };



    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleDateChange = (date, name) => {
        setFormData((prevData) => ({ ...prevData, [name]: date }));
    };

    const uploadFileAndSubmit = async () => {
        const requiredFields = ['TLName', 'TLDepartment', 'TLYear', 'TLDOB', 'TLNumber', 'TLEmail', 'TLRegisterNumber', 'TLHostelDays', 'M1Name', 'M1Department', 'M1RegisterNumber', 'M1Year', 'M1DOB', 'M1HostelDays', 'M2Name', 'M2RegisterNumber', 'M2Department', 'M2Year', 'M2DOB', 'M2HostelDays', 'TeamName', 'Title', 'Theme'];
        const emptyFields = requiredFields.filter(field => !formData[field]);

        if (emptyFields.length > 0) {
            alert(`Please fill in all required fields: ${emptyFields.join(', ')}`);
            return;
        }

        if (fileUpload === null) {
            alert('Please upload a PDF file before submitting.');
            return;
        }

        if (fileUpload.type !== 'application/pdf') {
            alert('Please upload a PDF file.');
            return;
        }

        const fileName = `${formData.TLName} - ${formData.TLYear}.pdf`;

        const pdfRef = ref(storage, `Abstracts/${fileName}`);

        try {
            setLoading(true);
            const snapshot = await uploadBytes(pdfRef, fileUpload);
            const url = await getDownloadURL(snapshot.ref);
            console.log(url);
            setFormData((prevData) => ({ ...prevData, Abstract: url }));

            const response = await fetch('https://script.google.com/macros/s/AKfycbxXPlFjHUE09-XdH-23IPG4ClTHq6hkF_1cgSPzwZVZD30w4nnWbg5IEmUNLzyCP2-q/exec', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    ...formData,
                    Abstract: url,
                }).toString(),
            });

            if (response.ok) {
                alert('Response saved successfully!');
                setFormData({
                    TLName: '',
                    TLDepartment: '',
                    TLYear: '',
                    TLDOB: '',
                    TLNumber: '',
                    TLEmail: '',
                    TLRegisterNumber: '',
                    TLHostelDays: '',
                    M1Name: '',
                    M1RegisterNumber: '',
                    M1Department: '',
                    M1Year: '',
                    M1DOB: '',
                    M1HostelDays: '',
                    M2Name: '',
                    M2RegisterNumber: '',
                    M2Department: '',
                    M2Year: '',
                    M2DOB: '',
                    M2HostelDays: '',
                    Abstract: '',
                    TeamName: '',
                    Title: '',
                    Theme: '',
                });
                setLoading(false);
            } else {
                alert('Error saving response. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    };


    const DepartmentOptions = [
        'Select',
        'AI & DS',
        'AGRI',
        'BME',
        'CIVIL',
        'CSE',
        'ECE',
        'EEE',
        'IT',
        'MECH'
    ];

    const ThemeOptions = [
        "Intelligent Automation",
        "Green Technology",
        "Disaster Management",
        "Smart Drone & Robots",
        "Health Technology",
        "Security Surveillance",
        "Smart Drone & Robots",
        "Game Development",
        "Security Surveillance",
        "Waste To Wealth",
        "Others",
    ];

    const Year = [
        'Select',
        "II ",
        "III"
    ];

    return (

        <Section>
            <h1 style={{ textAlign: 'center' }} >GUIDELINES AND REGISTRATION</h1>
            <Box>
                <Right>
                    <GuidelineBox>
                        <ol>
                            <li>Each team must consist of 3 students.</li>
                            <li>All the Team members must belong to the same batch, either Second Year or Third Year.</li>
                            <li>A Team can have participants from different departments but within same year.</li>
                            <li>Single registration is enough for the entire team.</li>
                            <li>Same team can submit multiple ideas and member of a team should not be in any other team.</li>
                            <li>Teams can choose their own problem statement and will be shortlisted based on the innovation and novelty of the idea.</li>
                            <li>Download the Sample Abstract for reference and submit your abstract in PDF format.</li>
                        </ol>
                        <>
                            <a href="https://storage.googleapis.com/registrationform-3f9a0.appspot.com/%20bjhvjjhg.pdf?Expires=1739688709&GoogleAccessId=firebase-adminsdk-wdi5h%40registrationform-3f9a0.iam.gserviceaccount.com&Signature=a2YQpPkbA3rWE637BjiuRDxDswb0zPuADePdLes0c%2FaXTHSM8AJ6kuQoy8N%2F0yNdEoeNtwpO4%2Fpm5gVW1aGpOaW91OBKJAy1A4oj7loT7Sad1y2ZCUjl9gcZnP81snJfoUFOnXSCANG%2Futg7cPAPYmrXxrTN7rljU3WIc9x0yy%2F%2FV5wFSRiwUZD1esd53%2Fw0THcy9BtNxl8OllWjhXxSDJNOf%2FnS%2FyLUvVhsmA4xU7aAU5wjiU2ON7ljtUslg0cktIt7cfRXnQQS4OhMijLqaUmzaxOY8pU3K1UwCA68N4qmVnwoEOgz%2F4QnEiGJ1KFOfkIbd1NSixRegUHtH3Yteg%3D%3D">
                                Download Here <img src={Document} alt='document' />
                            </a>
                        </>
                    </GuidelineBox>
                </Right>
                <Left>
                    <FormContainer >
                        <TLSection style={{ display: currentSection === 0 ? 'block' : 'none' }}>
                            <Heading>TeamLeader</Heading>
                            <InputGroup>

                                <FormGroup>
                                    <Label>Name:</Label>
                                    <Input type="text" name="TLName" value={formData.TLName} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Department:</Label>
                                    <Select name="TLDepartment" value={formData.TLDepartment} onChange={handleChange}>
                                        {DepartmentOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Year:</Label>
                                    <Select type="text" name="TLYear" value={formData.TLYear} onChange={handleChange}>
                                        {Year.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormGroup>

                                <FormGroup>
                                    <Label>DOB:</Label>
                                    <Input type="date" name="TLDOB" value={formData.TLDOB} onChange={(e) => handleDateChange(e.target.value, 'TLDOB')} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>WhatsApp Number:</Label>
                                    <Input type="Number" name="TLNumber" value={formData.TLNumber} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Email:</Label>
                                    <Input type="email" name="TLEmail" value={formData.TLEmail} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Register Number:</Label>
                                    <Input type="number" name="TLRegisterNumber" value={formData.TLRegisterNumber} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <RadioGroup>
                                        <label>
                                            <Input
                                                type="radio"
                                                name="TLHostelDays"
                                                value="Hostel"
                                                checked={formData.TLHostelDays === 'Hostel'}
                                                onChange={handleRadioChange}
                                            />
                                            Hosteller
                                        </label>
                                        <label>
                                            <Input
                                                type="radio"
                                                name="TLHostelDays"
                                                value="Days Scholar"
                                                checked={formData.TLHostelDays === 'Days Scholar'}
                                                onChange={handleRadioChange}
                                            />
                                            Day Scholar
                                        </label>
                                    </RadioGroup>
                                </FormGroup>
                            </InputGroup>

                        </TLSection>
                        <TLSection style={{ display: currentSection === 1 ? 'block' : 'none' }}>

                            <Heading>Member 1</Heading>
                            <InputGroup>
                                <FormGroup>
                                    <Label>Name:</Label>
                                    <Input type="text" name="M1Name" value={formData.M1Name} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Department:</Label>
                                    <Select name="M1Department" value={formData.M1Department} onChange={handleChange}>
                                        {DepartmentOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormGroup>


                                <FormGroup>
                                    <Label>Register Number:</Label>
                                    <Input type="number" name="M1RegisterNumber" value={formData.M1RegisterNumber} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Year:</Label>
                                    <Select type="number" name="M1Year" value={formData.M1Year} onChange={handleChange}>
                                        {Year.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormGroup>

                                <FormGroup>
                                    <Label>DOB:</Label>
                                    <Input type="date" name="M1DOB" value={formData.M1DOB} onChange={(e) => handleDateChange(e.target.value, 'M1DOB')} />
                                </FormGroup>

                                <FormGroup>
                                    <RadioGroup>
                                        <label>
                                            <Input
                                                type="radio"
                                                name="M1HostelDays"
                                                value="Hostel"
                                                checked={formData.M1HostelDays === 'Hostel'}
                                                onChange={handleRadioChange}
                                            />
                                            Hosteller
                                        </label>
                                        <label>
                                            <Input
                                                type="radio"
                                                name="M1HostelDays"
                                                value="Days Scholar"
                                                checked={formData.M1HostelDays === 'Days Scholar'}
                                                onChange={handleRadioChange}
                                            />
                                            Day Scholar
                                        </label>
                                    </RadioGroup>
                                </FormGroup>
                            </InputGroup>
                        </TLSection>
                        <TLSection style={{ display: currentSection === 2 ? 'block' : 'none' }}>

                            <Heading>Member 2</Heading>
                            <InputGroup>
                                <FormGroup>
                                    <Label>Name:</Label>
                                    <Input type="text" name="M2Name" value={formData.M2Name} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Department:</Label>
                                    <Select name="M2Department" value={formData.M2Department} onChange={handleChange}>
                                        {DepartmentOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Register Number:</Label>
                                    <Input type="number" name="M2RegisterNumber" value={formData.M2RegisterNumber} onChange={handleChange} />
                                </FormGroup>

                                <FormGroup>
                                    <Label>Year:</Label>
                                    <Select type="number" name="M2Year" value={formData.M2Year} onChange={handleChange}>
                                        {Year.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormGroup>

                                <FormGroup>
                                    <Label>DOB:</Label>
                                    <Input type="date" name="M2DOB" value={formData.M2DOB} onChange={(e) => handleDateChange(e.target.value, 'M2DOB')} />
                                </FormGroup>

                                <FormGroup>
                                    <RadioGroup>
                                        <label>
                                            <Input
                                                type="radio"
                                                name="M2HostelDays"
                                                value="Hostel"
                                                checked={formData.M2HostelDays === 'Hostel'}
                                                onChange={handleRadioChange}
                                            />
                                            Hosteller
                                        </label>
                                        <label>
                                            <Input
                                                type="radio"
                                                name="M2HostelDays"
                                                value="Days Scholar"
                                                checked={formData.M2HostelDays === 'Days Scholar'}
                                                onChange={handleRadioChange}
                                            />
                                            Day Scholar
                                        </label>
                                    </RadioGroup>
                                </FormGroup>
                            </InputGroup>
                        </TLSection>
                        <TLSection style={{ display: currentSection === 3 ? 'block' : 'none' }}>
                            <InputGroup>
                                <FormGroup>
                                    <Label>Team Name</Label>
                                    <Input type="text" name="TeamName" value={formData.TeamName} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Title:</Label>
                                    <Input type="text" name="Title" value={formData.Title} onChange={handleChange} />
                                </FormGroup>
                                <FormGroup>
                                    <Label>Theme:</Label>
                                    <Select name="Theme" value={formData.Theme} onChange={handleChange}>
                                        <option value="">Select Theme</option>
                                        {ThemeOptions.map(option => (
                                            <option key={option} value={option}>{option}</option>
                                        ))}
                                    </Select>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Abstract:</Label>
                                    <Input type="file" name="PDF" onChange={(event) => setFileUpload(event.target.files[0])} />
                                </FormGroup>
                            </InputGroup>
                        </TLSection>
                    </FormContainer>
                    <ButtonGroup>
                        {currentSection > 0 && (
                            <Button onClick={handlePrevious}>Previous</Button>
                        )}
                        {currentSection < 3 && (
                            <Button onClick={handleNext}>Next</Button>
                        )}
                        {currentSection === 3 && (
                            <Button onClick={uploadFileAndSubmit}>Submit</Button>
                        )}
                    </ButtonGroup>
                </Left>
            </Box>
            {loading && <LoadingOverlay />}
        </Section>

    )
}

export default Registration

const Section = styled.div`
    max-width: 100vw;
    height: 100%;
    padding: 20px 104px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    flex-direction: column;
    position: relative;
    z-index: 1;
    h1{
        position: relative;
    }

    @media screen and (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: flex-start;
    }
`;

const Box = styled.div`
    display: flex;
    gap: 50px;
    position: relative;
        @media screen and (max-width: 768px) {
        padding: 20px;
        flex-direction: column;
        justify-content: flex-start;
    }
    `;

const Left = styled.div`
    flex-basis: 50%;
    `;

const GuidelineBox = styled.div`
border: 3px solid #444;
border-radius: 4px;
min-height: 450px;
padding: 10px;
li{
    margin-bottom: 15px;
}
a{
    display: flex;
    align-items: center;
    margin-left: 4%;
}
img{
    width: 42px;
}
@media screen and (max-width: 768px) {
        margin-bottom: 10%;
        min-height: 600px;
        a{
    justify-content: center;
}
    }
`;
const Right = styled.div`
    flex-basis: 45%;
`;



const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    text-align: center; 
    @media screen and (max-width: 768px) {
        align-items: flex-start;
    }
`;

const TLSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0rem 5rem;
    background-color: #000; 
    border-radius: 5px;
    border: 2px solid #444; 
    padding: 20px; 
    width: 100%;
    min-height: 400px;
    @media screen and (max-width: 768px) {
        min-height: 600px;
        align-items: flex-start;
    }
`;

const Heading = styled.h2`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
`;

const FormGroup = styled.div`
    flex-basis: calc(33.33%);
    margin-bottom: 20px;
    margin-right: 5px;
    @media screen and (max-width: 768px) {
        flex-basis: 100%;
    }
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    /* width: 150px; */
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
    background-color: #444;
    color: #fff;
    `;

const Select = styled.select`
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #444;
    color: #fff;
`;

const Button = styled.button`
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 1rem 0 2em;
  max-width: 120px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  background-color: red;

  &:hover {
    border: 1px solid;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
      0 0 20px rgba(255, 255, 255, 0.2);
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #427388;
  }
`;
const RadioGroup = styled.div`
    margin-top: 10px;
    label {
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
    }
    input {
        width: 12px;
    }
`;

// const ButtonGroup = styled.div`
//     display: flex;
//     align-self: center;
//     justify-content: space-between;
// `;

const ButtonGroup = styled.div`
    display: flex;
    align-self: center;
    justify-content: flex-end; /* Adjusted from space-between to flex-end */
    gap: 69%;
    @media screen and (max-width: 768px) {
        gap: 10%;
        justify-content: center; /* Keep space-between for smaller screens if needed */
    }
`;


const InputGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
`;

