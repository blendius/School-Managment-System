import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { FeedbackToNxenesi } from "../models/feedbackToNxenesi";
import { v4 as uuid } from 'uuid';

export default class FeedbackStore {
    profId: string | null = null;
    feedbackRegistry = new Map<string, FeedbackToNxenesi>();
    selectedFeedback: FeedbackToNxenesi | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get feedbackByDate() {
        return Array.from(this.feedbackRegistry.values()).sort((a, b) => Date.parse(a.dataEDergimit) - Date.parse(b.dataEDergimit));
    }
    loadFeedbacksProf = async (id: string | undefined) => {
        try {
            const feedbacks = await agent.FeedbackToNxenesit.listProf(id);
            feedbacks.forEach(feedback => {
                feedback.dataEDergimit = feedback.dataEDergimit.split('T')[0];
                this.feedbackRegistry.set(feedback.feedbackId, feedback)
            })
            this.setLoadingInitial(false);
        }

        catch (error) {
            console.log(error);

            this.setLoadingInitial(false);

        }
    }

    loadFeedbacksNxenesi = async (email:string | undefined)=>{
        try{
            const feedbacks = await agent.FeedbackToNxenesit.listNxenesi(email);

            feedbacks.forEach(feedback=>{
                feedback.dataEDergimit = feedback.dataEDergimit.split('T')[0];
                this.feedbackRegistry.set(feedback.feedbackId,feedback);
            })
            this.setLoadingInitial(false);
        }
        catch(error){
            console.log(error);
            this.setLoadingInitial(false);
            
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectFeedback = (id: string) => {
        this.selectedFeedback = this.feedbackRegistry.get(id);
    }

    cancelSelectedFeedback = () => {
        this.selectedFeedback = undefined;

    }

    openForm = (id?: string) => {
        id ? this.selectFeedback(id) : this.cancelSelectedFeedback();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createFeedback = async (feedback: FeedbackToNxenesi) => {
        this.loading = true;
        feedback.feedbackId = uuid();
        try {
            await agent.FeedbackToNxenesit.create(feedback);
            runInAction(() => {
                this.feedbackRegistry.set(feedback.feedbackId, feedback)
                this.selectedFeedback = feedback;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })

        }
    }
    deleteFeedback = async (id: string) => {
        this.loading = true;
        try {
            await agent.FeedbackToNxenesit.delete(id);
            runInAction(() => {
                this.feedbackRegistry.delete(id);
                if (this.selectedFeedback?.feedbackId === id) this.cancelSelectedFeedback();
                this.loading = false;
            })
        }
        catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }


}
