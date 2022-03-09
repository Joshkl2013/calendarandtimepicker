import * as React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Box from '@material-ui/core/Box'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  DatePicker
} from '@material-ui/pickers';

export interface ICalendarAndTimeProps {
	selectedTime?: Date;
    selectedDate?: Date;
    personaSize?: number;
    borderColor: string;
    borderHoverColor: string;
    borderPressedColor: string;
    borderRadius: number;
    borderThickness: number;
    pickerColor: string;
    pickerFill: string;
    pickerCalFill: string;
    pickerLabel: string;
    textboxColor: string;
    textboxHoverFill: string;
    textboxPressedFill: string;
    textboxHeight: number;
    textboxFill: string;
    fontSize: number;
    iconFill: string;
    displayMode: string;
	updateResponse: (newValue: string) => void;
}

export interface ICalendarAndTimeState extends React.ComponentState, ICalendarAndTimeProps {
	personaSize: number;
	imagesFadeIn: boolean;
    borderColor: string;
    borderHoverColor: string;
    borderPressedColor: string;
    borderRadius: number;
    borderThickness: number;
    pickerColor: string;
    pickerFill: string;
    pickerCalFill: string;
    pickerLabel: string;
    textboxColor: string;
    textboxHoverFill: string;
    textboxPressedFill: string;
    textboxHeight: number;
    textboxFill: string;
    fontSize: number;
    iconFill: string;
    displayMode: string;
    updateResponse: (newValue: string) => void;
    //selectedTime: Date;
}



export class CalendarAndTimeComp extends React.Component<ICalendarAndTimeProps, ICalendarAndTimeState> {
	constructor(props: ICalendarAndTimeProps) {
		super(props);

		this.state = {
			//selectedTime: props.selectedTime || new Date(),
			imagesFadeIn: true,
			personaSize: 32,
            borderColor: props.borderColor,
            borderHoverColor: props.borderHoverColor,
            borderPressedColor: props.borderPressedColor,
            borderRadius: props.borderRadius,
            borderThickness: props.borderThickness,
            pickerColor: props.pickerColor,
            pickerFill: props.pickerFill,
            pickerCalFill: props.pickerCalFill,
            pickerLabel: props.pickerLabel,
            textboxColor: props.textboxColor,
            textboxHoverFill: props.textboxHoverFill,
            textboxPressedFill: props.textboxPressedFill,
            textboxHeight: props.textboxHeight,
            textboxFill: props.textboxFill,
            fontSize: props.fontSize,
            iconFill: props.iconFill,
            displayMode: props.displayMode,
            updateResponse: props.updateResponse
		};

        this.handleDateChange = this.handleDateChange.bind(this);
	}

    handleTimeChange = (newValue: any) => {
        this.setState({selectedTime: newValue})
    }

    handleDateChange = (newValue: any) => {
        //convert date to ISO format
        var date = new Date(newValue);
        var isoDate = date.toISOString();
        this.setState({selectedDate: newValue})
        //this.setState({selectedDate: isoDate});
        this.props.updateResponse(isoDate);
    }


    //Override notes can generally be found at https://material-ui-pickers.dev/guides/css-overrides
    //I had to look a lot of this myself. Not a lot of good documentation I could find on overrides plus this is an older version. Current version as of 3/8/22 is 5.4.4
    //The Material-UI version on this project is v3.2.9. Hopefully this helps you make your customizations more easily
    // - JL
    public render(): JSX.Element {
    const defaultMaterialTheme = createTheme({
        palette: {
            primary: {
                main: this.props.pickerFill,
                light: this.props.iconFill,
                },
                secondary: {
                light: this.props.textboxFill,
                main: this.props.pickerColor,
                // dark: will be calculated from palette.secondary.main,
                contrastText: this.props.borderColor,
                }
          },
        overrides: {
            MuiIconButton: {
                root:{
                    fill: this.props.iconFill
                    
                },
                colorPrimary: {
                    fill: this.props.iconFill
                }, 
            },
            MuiPaper: {
                root: {
                    backgroundColor: this.props.pickerCalFill
                }
                
            },
            MuiOutlinedInput: {
                root: {
                    //Change the date picker outline on hover
                    "&:hover $notchedOutline":{
                        borderColor: ''.concat(this.props.borderHoverColor,' !important'),
                        borderWidth: ''.concat((this.props.borderThickness+2).toString(),'px'),
                    },
                    //Change the date picker outline when it has been selected
                    "&$focused $notchedOutline":{
                        borderColor: ''.concat(this.props.borderPressedColor,' !important'),
                        borderWidth: ''.concat((this.props.borderThickness+2).toString(),'px'),
                    },
                    background: this.props.textboxFill,
                    "&:hover": {
                        backgroundColor: this.props.textboxHoverFill,
                    },
                    "&$focused": {
                        backgroundColor: this.props.textboxPressedFill,
                    },
                },
                notchedOutline: {

                    borderWidth: ''.concat(this.props.borderThickness.toString(),'px'),
                    borderColor: ''.concat(this.props.borderColor,' !important'),
                    borderRadius: this.props.borderRadius,
                },
            },
            MuiTextField: {
                
            },
          },
        });

        //Details of the settings can be found at https://material-ui-pickers.dev/api/KeyboardDatePicker
        //Or https://material-ui-pickers.dev/api/DatePicker
        //I tried to leave notes on the important ones so you know why they're set
        // - JL
        return(
            <div>
                <ThemeProvider theme={defaultMaterialTheme}>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker
                            variant="inline"                                //
                            label={this.props.pickerLabel}                  //Label of the container in the outline
                            inputVariant="outlined"                         //Outline of the container
                            format="MM/dd/yyyy"                             //Format the label in the text box when picker is closed. I have it set to American haha
                            value={this.props.selectedDate}                 //
                            onChange={this.handleDateChange}                //
                            fullWidth                                       //Picker label takes up full width of the container
                            autoOk                                          //Close picker automatically once date is selected
                            readOnly = {this.props.displayMode=='View'}     //If Display mode = View then turn into read only
                            disabled = {this.props.displayMode=='Disabled'} //If Display Mode = Disabled then disable
                            inputProps={
                                {style: {fontSize: this.props.fontSize, height: this.props.textboxHeight}}
                            }                                               //Changes the font size to the font size you select in PowerApps
                            
                        />         
                    </MuiPickersUtilsProvider>
                </ThemeProvider>


            </div>
        )
    }
}
