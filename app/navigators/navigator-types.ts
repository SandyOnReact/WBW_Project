import { IAttributes } from "models"

export type RootNavigationRoutes = {
    AuthStack: undefined,
    ApplicationStack: undefined
}

export type AuthNavigationRoutes = {
    Login: undefined
}

export type ApplicationNavigationRoutes = {
    Home: undefined,
    ObservationHistory: undefined,
    AddObservation: undefined
    AuditAndInspectionScreen: undefined
    StartInspection: undefined
    EditInspection: undefined
    Inspection: undefined
    CompleteOrAssignTask: {
        callback: ( value: any ) => void,
        item: IAttributes
    }
    CompleteTask: undefined
    AssignTask: undefined
    UploadImage: {
        attributeData: IAttributes
    }
    CaptureImage: {
        attributeData: IAttributes
    }
    CaptureTaskImage: {
        callback: ( value: any ) => void
    }
}