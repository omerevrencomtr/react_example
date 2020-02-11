import React from "react";
import {useSelector} from "react-redux";
import {Portlet, PortletBody} from "../../partials/content/Portlet";
import {metronic} from "../../../_metronic";
import {makeStyles} from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import SwapVertIcon from '@material-ui/icons/SwapVert';
import {Image} from "react-bootstrap";
import axios from "axios";
import {requestPassword} from "../../crud/auth.crud";

export default function Dashboard() {


    const {brandColor, dangerColor, successColor, primaryColor} = useSelector(
        state => ({
            brandColor: metronic.builder.selectors.getConfig(
                state,
                "colors.state.brand"
            ),
            dangerColor: metronic.builder.selectors.getConfig(
                state,
                "colors.state.danger"
            ),
            successColor: metronic.builder.selectors.getConfig(
                state,
                "colors.state.success"
            ),
            primaryColor: metronic.builder.selectors.getConfig(
                state,
                "colors.state.primary"
            )
        })
    );

    const useStyles = makeStyles(theme => ({
        root: {
            width: '90%',
        },
        backButton: {
            marginRight: theme.spacing(1),
        },
        instructions: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
        },
    }));

    function getSteps() {
        return ['Takas', 'Yatır', 'Çek', 'Tamamlandı'];
    }

    const [values, setValues] = React.useState({
        amount: '',
        currencies: [],
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = prop => event => {
        setValues({...values, [prop]: event.target.value});
    };


    let currencies: [];
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            currencies = res.data.map(function (data) {
                return <Dropdown.Item>{data.name}</Dropdown.Item>;
            });
            setValues({currencies:currencies})

        });

    var data = [
        {author: "Pete Hunt", text: "This is one comment"},
        {author: "Jordan Walke", text: "This is *another* comment"}
    ];

    function getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return (
                    <>

                        <InputGroup>
                            <FormControl
                                placeholder="Tutar"
                                aria-label="Tutar"
                                aria-describedby="basic-addon2"
                                type="text"
                                value={values.amount}
                                onChange={handleChange('amount')}
                            />

                            <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-secondary"
                                title="BTC"
                                id="input-group-dropdown-2"
                            >
                                <Dropdown.Item href="#">BTC</Dropdown.Item>
                                <Dropdown.Item href="#">ETH</Dropdown.Item>
                                <Dropdown.Item href="#">TEST</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>

                        <div className="kt-separator kt-separator--dashed mb-1"></div>

                        <label className={"mb-0", "mt-2"} htmlFor="basic-url"><code>1 BTC ~ 43.98697985 ETH </code>Kur
                            Değeri(Beklenen)</label>
                        <Button variant="contained" color="light" className={classes.button, "pull-right"}>
                            Değiştir
                            <SwapVertIcon className={classes.rightIcon}/>
                        </Button>
                        <div className="kt-separator kt-separator--dashed mt-3"></div>
                        <InputGroup>
                            <FormControl
                                disabled="disabled"
                                placeholder="Tutar"
                                aria-label="Tutar"
                                aria-describedby="basic-addon2"
                                value="43.98697985"
                            />

                            <DropdownButton
                                as={InputGroup.Append}
                                variant="outline-secondary"
                                title="ETH"
                                id="input-group-dropdown-2"
                            >

                                {values.currencies}
                                <Dropdown.Item href="#">BTC</Dropdown.Item>
                                <Dropdown.Item href="#">ETH</Dropdown.Item>
                                <Dropdown.Item href="#">TEST</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        <div>
                        </div>
                    </>
                );
            case 1:
                return '1- giriş';
            case 2:
                return '2- giriş';
            case 3:
                return '3- giriş';
            default:
                return 'default index';
        }
    }


    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    function handleNext() {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    }

    function handleBack() {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    }

    function handleReset() {
        setActiveStep(0);
    }


    return (
        <>
            <div className="row mt-5 mb-5">
                <div className="col-xl-6 mt-5">
                    <div className="row row-full-height">
                        <div className="col-sm-12 col-md-12 col-lg-12">

                            <h1 style={{fontSize: 45}}>Daha iyi oranlarla daha fazla kripto alın!</h1>

                            <div className="kt-separator kt-separator--dashed mt-3"></div>
                            <h5>150'den fazla kripto para ile hızlı, basit, saklamayan Değişim Servisi. Ağ ücretlerinizi
                                biz ödüyoruz.</h5>
                            <Image src="https://dosya.wmaraci.com/nedir/app-store.png"
                                   style={{width: 150, marginTop: 30}}/>
                            <Image src="https://izisurvey.com/Images/img/getongplay.png"
                                   style={{width: 125, marginTop: 30, marginLeft: 10}}/>


                        </div>
                    </div>
                </div>

                <div className="col-xl-6">
                    <Portlet fluidHeight={true}>
                        <PortletBody>
                            <div className={classes.root}>
                                <Stepper activeStep={activeStep} alternativeLabel>
                                    {steps.map(label => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                                <div>
                                    {activeStep === steps.length ? (
                                        <div>
                                            <Typography className={classes.instructions}>All steps
                                                completed</Typography>
                                            <Button onClick={handleReset}>Reset</Button>
                                        </div>
                                    ) : (
                                        <div>
                                            <Typography
                                                className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                            <div>
                                                <Button variant="contained" className={"btn-block btn-outline-primary"}
                                                        color="primary" onClick={handleNext} size="lg" block>
                                                    {activeStep === steps.length - 1 ? 'Bitir' : 'İleri'}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </PortletBody>
                    </Portlet>
                </div>
            </div>
        </>
    );
}
