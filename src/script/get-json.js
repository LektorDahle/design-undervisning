/**
  * @typedef {Object} ElementInfo
  * @property {string} type
  * @property {string} tag
  * @property {string} [content]
  * @property {string} [src]
  * @property {string} [alt]
*/
/** @typedef {Record<string, Record<string, Record<string, ElementInfo>>>} DataSchema  */


export class GetContent {
    /**@param {string} path */
    constructor(path) {
        this.path = path;

        /** @type {Promise<DataSchema | undefined>} */
        this.data = this.fetchJsonData();

    }

    /** @returns {Promise<DataSchema | undefined>} */
    async fetchJsonData() {
        try {
            /** @type {Response} */
            const response = await fetch(this.path);

            if (!response.ok) {
                throw new Error(`HTTP error: status = ${response.status}`);
            }

            /** * @type {Object<string, Object<string, Object<string, ElementInfo>>>} 
             */
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Could not fetch the data:', error);
        }
    }

    async mainSubjects(){
        const data = await this.data;

        if (!data) return [];

        return Object.keys(data);
    }
}
