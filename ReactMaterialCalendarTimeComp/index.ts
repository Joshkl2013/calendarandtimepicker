import {IInputs, IOutputs} from "./generated/ManifestTypes";
import { CalendarAndTimeComp, ICalendarAndTimeProps } from './CalendarAndTimeComp';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isContext } from "vm";
import { Container } from "@material-ui/core";


export class ReactMaterialCalendarTimeComp implements ComponentFramework.StandardControl<IInputs, IOutputs> {

    private _notifyOutputChanged: () => void;
    private theContainer: HTMLDivElement;
    private _container: HTMLDivElement;
    private _context: ComponentFramework.Context<IInputs>;
    private _value: string;


    private props: ICalendarAndTimeProps = {
        borderColor: "#000000",
        borderHoverColor: "#444444",
        borderPressedColor: "#222222",
        borderRadius: 5,
        borderThickness: 2,
        displayMode: "Edit",
        pickerColor: "#000000",
        pickerCalFill: "#ffffff",
        pickerFill: "#6124e5",
        pickerLabel: "Date Picker",
        labelSize: 12,
        textboxColor: "#000000",
        textboxHoverFill: "#ffffff",
        textboxPressedFill: "#ffffff",
        textboxFill: "#ffffff",
        textboxHeight: 50,
        fontSize: 12,
        iconFill: "#6124e5",
        selectedDate: new Date(),
        updateResponse: this.updateResponse.bind(this),
    }
    /**
     * Empty constructor.
     */
    constructor()
    {

    }


    //React call back function
    private updateResponse(newValue: string) {
        console.log("New response from index file**", newValue);
        this._value = newValue;
        this._notifyOutputChanged();
    }


    /**
     * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
     * Data-set values are not initialized here, use updateView.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
     * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
     * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
     * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
     */
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {

        //initialize variables
        this._context = context;
        this._container= document.createElement("div");
        this._notifyOutputChanged = notifyOutputChanged;
        // Add control initialization code
        this._notifyOutputChanged = notifyOutputChanged;
        //this.props.selectedTime = context.parameters.Label.raw as unknown as Date || 3;
        this.props.borderColor = context.parameters.BorderColor.raw as string;
        this.props.borderHoverColor = context.parameters.BorderHoverColor.raw as string;
        this.props.borderPressedColor = context.parameters.BorderPressedColor.raw as string;
        this.props.borderRadius = context.parameters.BorderRadius.raw as number;
        this.props.borderThickness = context.parameters.BorderThickness.raw as number;
        this.props.pickerFill = context.parameters.DatePickerFill.raw as string;
        this.props.pickerCalFill = context.parameters.DatePickerCalendarFill.raw as string;
        this.props.pickerColor = context.parameters.DatePickerColor.raw as string;
        this.props.pickerLabel = context.parameters.LabelText.raw as string;
        this.props.labelSize = context.parameters.LabelSize.raw as number;
        this.props.textboxColor = context.parameters.TextboxColor.raw as string;
        this.props.textboxHoverFill = context.parameters.TextboxHoverFill.raw as string;
        this.props.textboxPressedFill = context.parameters.TextboxPressedFill.raw as string;
        this.props.textboxHeight = context.mode.allocatedHeight as number;
        this.props.textboxFill = context.parameters.TextboxFill.raw as string;
        this.props.fontSize = context.parameters.Size.raw as number;
        this.props.iconFill = context.parameters.IconFill.raw as string;
        this.props.displayMode = context.parameters.DisplayMode.raw as string;
        this.theContainer = container;
        context.mode.trackContainerResize(true);
        container.appendChild(this._container);
    }


    /**
     * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
     * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
     */
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        
        this.props.borderColor = context.parameters.BorderColor.raw as string;
        this.props.borderHoverColor = context.parameters.BorderHoverColor.raw as string;
        this.props.borderPressedColor = context.parameters.BorderPressedColor.raw as string;
        this.props.borderRadius = context.parameters.BorderRadius.raw as number;
        this.props.borderThickness = context.parameters.BorderThickness.raw as number;
        this.props.pickerFill = context.parameters.DatePickerFill.raw as string;
        this.props.pickerCalFill = context.parameters.DatePickerCalendarFill.raw as string;
        this.props.pickerColor = context.parameters.DatePickerColor.raw as string;
        this.props.pickerLabel = context.parameters.LabelText.raw as string;
        this.props.labelSize = context.parameters.LabelSize.raw as number;
        this.props.textboxColor = context.parameters.TextboxColor.raw as string;
        this.props.textboxHoverFill = context.parameters.TextboxHoverFill.raw as string;
        this.props.textboxPressedFill = context.parameters.TextboxPressedFill.raw as string;
        this.props.textboxHeight = context.mode.allocatedHeight as number;
        this.props.textboxFill = context.parameters.TextboxFill.raw as string;
        this.props.fontSize = context.parameters.Size.raw as number;
        this.props.iconFill = context.parameters.IconFill.raw as string;
        this.props.displayMode = context.parameters.DisplayMode.raw as string;
        this.props.selectedDate = context.parameters.SelectedDate.raw as Date;
        // Add code to update control view
        ReactDOM.render(
            React.createElement(
                CalendarAndTimeComp,
                this.props
            ),
            this.theContainer
        );
    }

    /**
     * It is called by the framework prior to a control receiving new data.
     * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
     */
    public getOutputs(): IOutputs
    {
        return {
            SelectedDate: new Date(this._value),
            //PrimaryColor: this._primaryColor
        };
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
