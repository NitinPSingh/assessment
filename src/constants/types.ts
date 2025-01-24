export enum ModelType {
    Extraction = "Extraction",
    Classification = "Classification",
    Regression = "Regression",
    Generative = "Generative",
    ReinforcementLearning = "Reinforcement",
    Clustering = "Clustering",
    DimensionalityReduction = "Dimensionality",
    Recommendation = "Recommendation",
    AnomalyDetection = "Anomaly",
    SequenceModeling = "Sequence",
    TransferLearning = "Transfer "
  }


export enum ModelStatus {
    Active = 'active',
    Inactive = 'inactive'
}

export enum LLMType {
    GeneralPurpose = "General Purpose",
    Neural = "Neural",
    DomainSpecific = "Domain-Specific",
    Conversational = "Conversational",
    Summarization = "Summarization",
    Translation = "Translation",
    CodeGeneration = "Code Generation",
    SentimentAnalysis = "Sentiment Analysis",
    QuestionAnswering = "Question Answering",
    TextCompletion = "Text Completion",
    ImageCaptioning = "Image Captioning",
    ContentModeration = "Content Moderation",
    TextClassification = "Text Classification",
    NamedEntityRecognition = "Named Entity Recognition",
    KeywordExtraction = "Keyword Extraction",
    TextToSpeech = "Text to Speech",
    SpeechToText = "Speech to Text",
    Multimodal = "Multimodel",
    Personalization = "Personalization",
  }
  

  export type ModelDataObj = {
    modelName: string;
    id: string;
    description: string;
    modelType: ModelType;
    createdOn: Date; 
    lastTrainedOn: Date;
    status: ModelStatus;
    llm:LLMType;
  };
  

export  type ModelDataFromObj = Pick<ModelDataObj, 'modelName' | 'description' > & {
    modelType: ModelType | undefined;
    llm: LLMType | undefined;
};