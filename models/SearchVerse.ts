/**
 * API.Bible
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.6.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class SearchVerse {
    'id': string;
    'orgId': string;
    'bibleId': string;
    'bookId': string;
    'chapterId': string;
    'text': string;
    'reference'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "orgId",
            "baseName": "orgId",
            "type": "string",
            "format": ""
        },
        {
            "name": "bibleId",
            "baseName": "bibleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "bookId",
            "baseName": "bookId",
            "type": "string",
            "format": ""
        },
        {
            "name": "chapterId",
            "baseName": "chapterId",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SearchVerse.attributeTypeMap;
    }

    public constructor() {
    }
}

