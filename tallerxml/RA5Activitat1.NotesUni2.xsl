<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:output method="html" indent="yes" encoding="UTF-8"/>

    <xsl:template match="notes">
        <html>
            <head>
                <style>
                    body {
                        font-family: "Times New Roman", Times, serif;
                    }
                    table {
                        border-collapse: collapse;
                        width: 350px; 
                        margin-bottom: 20px;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px; 
                        background-color: #B0B0B0; 
                    }
                    th {
                        font-weight: bold;
                        text-align: left;
                    }
                    td:last-child {
                        text-align: center; 
                        width: 80px; 
                    }
                </style>
            </head>
            <body>
                <xsl:apply-templates select="assignatura"/>
            </body>
        </html>
    </xsl:template>

    <xsl:template match="assignatura">
        <table>
            <tr>
                <th colspan="2">
                    <xsl:value-of select="nom_assignatura"/>
                </th>
            </tr>
            <xsl:apply-templates select="alumnes/alumne"/>
        </table>
    </xsl:template>

    <xsl:template match="alumne">
        <tr>
            <td>
                <xsl:value-of select="nom"/>
            </td>
            <td style="text-align: center; width: 70px;"> 
                <xsl:value-of select="nota"/>
            </td>
        </tr>
    </xsl:template>

</xsl:stylesheet>