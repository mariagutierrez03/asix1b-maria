<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="text" encoding="UTF-8"/>

    <xsl:template match="/">
        <xsl:apply-templates select="notes/assignatura"/>
    </xsl:template>

    <xsl:template match="assignatura">
        <xsl:text>&#10;</xsl:text>
        <xsl:value-of select="nom_assignatura"/>
        <xsl:text>&#10;-------------------------&#10;</xsl:text>

        <xsl:apply-templates select="alumnes/alumne"/>
        
        <xsl:text>&#10;</xsl:text>
    </xsl:template>

    <xsl:template match="alumne">
        <xsl:variable name="nom" select="nom"/>
        <xsl:variable name="nota" select="nota"/>
        
        <xsl:value-of select="nom"/>
        <xsl:text> </xsl:text>
        <xsl:call-template name="addSpaces">
            <xsl:with-param name="text" select="nom"/>
        </xsl:call-template>
        <xsl:text> -- </xsl:text>
        <xsl:value-of select="nota"/>
        <xsl:text>&#10;</xsl:text>
    </xsl:template>

    <xsl:template name="addSpaces">
        <xsl:param name="text"/>
        <xsl:variable name="spaces" select="20 - string-length($text)"/>
        <xsl:if test="$spaces &gt; 0">
            <xsl:value-of select="substring('                    ', 1, $spaces)"/>
        </xsl:if>
    </xsl:template>
</xsl:stylesheet>
