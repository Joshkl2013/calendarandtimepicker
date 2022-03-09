/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    BorderColor: ComponentFramework.PropertyTypes.StringProperty;
    BorderHoverColor: ComponentFramework.PropertyTypes.StringProperty;
    BorderPressedColor: ComponentFramework.PropertyTypes.StringProperty;
    BorderRadius: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    BorderThickness: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    DatePickerFill: ComponentFramework.PropertyTypes.StringProperty;
    DatePickerColor: ComponentFramework.PropertyTypes.StringProperty;
    DatePickerCalendarFill: ComponentFramework.PropertyTypes.StringProperty;
    DisplayMode: ComponentFramework.PropertyTypes.StringProperty;
    IconFill: ComponentFramework.PropertyTypes.StringProperty;
    InputPlaceholder: ComponentFramework.PropertyTypes.StringProperty;
    LabelText: ComponentFramework.PropertyTypes.StringProperty;
    LabelSize: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    SelectedDate: ComponentFramework.PropertyTypes.DateTimeProperty;
    Size: ComponentFramework.PropertyTypes.DecimalNumberProperty;
    TextboxColor: ComponentFramework.PropertyTypes.StringProperty;
    TextboxHoverFill: ComponentFramework.PropertyTypes.StringProperty;
    TextboxPressedFill: ComponentFramework.PropertyTypes.StringProperty;
    TextboxFill: ComponentFramework.PropertyTypes.StringProperty;
}
export interface IOutputs {
    BorderColor?: string;
    BorderHoverColor?: string;
    BorderPressedColor?: string;
    BorderRadius?: number;
    BorderThickness?: number;
    DatePickerFill?: string;
    DatePickerColor?: string;
    DatePickerCalendarFill?: string;
    DisplayMode?: string;
    IconFill?: string;
    InputPlaceholder?: string;
    LabelText?: string;
    LabelSize?: number;
    SelectedDate?: Date;
    Size?: number;
    TextboxColor?: string;
    TextboxHoverFill?: string;
    TextboxPressedFill?: string;
    TextboxFill?: string;
}
