<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns="http://www.w3.org/1999/xhtml">

	<xsl:output method="xml" indent="yes" encoding="UTF-8" />

	<!-- @author Nihal Ahmed (I067595) -->

	<!-- Global Variables to convert and match text case insensitively -->
	<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
	<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
	
	<xsl:template match="/">
		<html>
			<head>
				<style>
					@page {
					size: auto; /* auto is the initial value */
					margin:
					0mm; /* this affects the margin in the printer settings */
					}

					body {
					background-color:#FFFFFF;
					margin: margin: 1mm 1mm 1mm 1mm; /* this
					affects the margin on the content
					before sending to printer */
					}

					table {

					/*box-shadow: inset 0 0 10px #000000;*/
					border: 1px solid
					#e3e3e3;
					background-color: #F0F0F0 ;
					border-radius: 6px;
					-webkit-border-radius: 6px;
					-moz-border-radius: 6px;
					-khtml-border-radius: 6px;
					box-shadow: 7px 7px 8px #818181;
					width: 100%;
					}

					td, th {
					padding: 5px;
					color: #333;
					}

					th.row{
					font-family: 'Trebuchet MS', Arial, Helvetica, "Sans Serif";
					background-color: #006295;
					color: white;
					border-bottom: solid 1px
					#999;
					font-size: 16px;
					}

					th {
					font-family: 'Trebuchet
					MS', Arial, Helvetica, "Sans Serif";
					font-size: 14px;
					line-height:
					20px;
					text-align: left;
					text-shadow: white 1px 1px 1px;

					}

					td {
					line-height: 20px;
					font-family: 'Trebuchet MS', Arial, Helvetica,
					"Sans Serif";
					font-size: 14px;
					border-bottom: 1px solid #fff;
					border-top: 1px solid #fff;
					}

					td.element{
					line-height: 20px;
					font-family: 'Trebuchet MS', Arial, Helvetica, "Sans Serif";
					font-size: 13px;
					font-style: bold;
					border-bottom: 1px solid #fff;
					border-top: 1px solid #fff;

					}

					caption{
					font-family: 'Trebuchet MS',
					Arial, Helvetica, "Sans Serif";
					font-size: 21px;
					font-style: bold;
					}

					li input {
					position: absolute;
					left: 0;
					margin-left: 0;
					opacity: 0;
					z-index: 2;
					cursor: pointer;
					height: 1em;
					width: 1em;
					top: 0;
					}

					li label
					{
					cursor: pointer;
					display: block;
					padding-left: 37px;
					}		
					
					ul.noindent {
						margin-left: 0px;
						margin-right: 0px;
						padding-left: 5px;
						padding-right: 0px;
					}
					
					td.breakWord {
						word-break: break-all; 
					}
				</style>

				<title>
					<xsl:value-of select="//modelerjob/@id" />
				</title>
			</head>
			<body>
				<table border="0">

					<tr class="row">
						<th class="row" width="13%">Job Details</th>
						<th class="row">
							<span style="color: #E8E8E8; font-size:1px  ;">.</span>
						</th>
					</tr>

					<tr>
						<td class="element">
							<strong>Job ID : </strong>
						</td>
						<td>
							<xsl:value-of select="//modelerjob/@id" />
						</td>
					</tr>
					<xsl:for-each select="modelerjob/jobinfo">
						<tr>
							<td class="element">
								<strong>Job Type : </strong>
							</td>
							<td>
								<xsl:value-of select="Jobtype" />
							</td>
						</tr>
						<tr>
							<td class="element">
								<strong>System : </strong>
							</td>
							<td>
								<xsl:value-of select="substring-after(systemuri, '//')" />
							</td>
						</tr>
						<tr>
							<td class="element">
								<strong>Start Time : </strong>
							</td>
							<td>
								<xsl:value-of select="startdate" />
							</td>
						</tr>
						<tr>
							<td class="element">
								<strong>End Time : </strong>
							</td>
							<td>
								<xsl:value-of select="enddate" />
							</td>
						</tr>
						<tr>
							<td class="element">
								<strong>Elapsed Time : </strong>
							</td>
							<td>
								<xsl:value-of select="elapsedtime" />
							</td>
						</tr>
					</xsl:for-each>

					<tr>
						<td />
						<td />
					</tr>
					<tr>
						<th class="row" width="13%">Summary Report</th>
						<th class="row">
							<span style="color: #E8E8E8; font-size:1px  ;">.</span>
						</th>
					</tr>

					<tr>
						<td colspan="2">
							<table class="innerTable" style="table-layout: fixed">
								<th style="width:20%; background-color:#E0E0E0;">Name</th>
								<th style="width:20%; background-color:#E0E0E0;">Type</th>
								<th style="width:20%; background-color:#E0E0E0;">Package</th>
								<th style="width:20%; background-color:#E0E0E0;">Status</th>
								<th style="width:20%; background-color:#E0E0E0;">Description</th>
								<xsl:for-each select="modelerjob/objectresults/object">
									
									<xsl:variable name="objectResult">
										<xsl:value-of select="@result" />
									</xsl:variable>
									
									<xsl:variable name="altColor">
										<xsl:choose>
											<xsl:when test="translate($objectResult, $smallcase, $uppercase) = 'SUCCESS'">#DCF39C</xsl:when>
											<xsl:when test="translate($objectResult, $smallcase, $uppercase) = 'WARNING'">#FEECA1</xsl:when>
											<xsl:when test="translate($objectResult, $smallcase, $uppercase) = 'ERROR'">#F6BABE</xsl:when>
											<xsl:otherwise></xsl:otherwise>
										</xsl:choose>
									</xsl:variable>
									
									<tr bgcolor="{$altColor}">

										<xsl:choose>
											<xsl:when test="contains(translate(@type, $smallcase, $uppercase), 'EXPORT DELIVERY UNIT')"> 
												<xsl:variable name="ExportDUName">
													<xsl:value-of select="@name" />
												</xsl:variable>
											
												<td>
													<xsl:value-of select="$ExportDUName" />
												</td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
												<td>
													<xsl:value-of select="@result" />
												</td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
											</xsl:when>
											<xsl:when test="contains(translate(@type, $smallcase, $uppercase), 'GENERATE TIME DATA')"> 
												<xsl:variable name="GenerateTDName">
													<xsl:value-of select="@name" />
												</xsl:variable>
																
												<td>
													<xsl:value-of select="$GenerateTDName" />
												</td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
												<td>
													<xsl:value-of select="@result" />
												</td>
												<td>
													<xsl:value-of select="$GenerateTDName" />
												</td>
												
											</xsl:when>
											
											<!-- Flat File -->
											<xsl:when test="contains(translate(@type, $smallcase, $uppercase), 'GENERIC')"> 
												<xsl:variable name="GenerateTDName">
													<xsl:value-of select="@name" />
												</xsl:variable>
																							
												<td>
													<xsl:value-of select="$GenerateTDName" />
												</td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
												<td>
													<xsl:value-of select="@result" />
												</td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
												
											</xsl:when>
											
											
											<xsl:when test="@name">
												<td style="word-wrap: break-word">
													<xsl:value-of select="@name" />
												</td>
												<td>
													<xsl:value-of select="@type" />
												</td>
												<td>-</td>
												<td>
													<xsl:value-of select="@result" />
												</td>
												<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
											</xsl:when>
															
											<xsl:otherwise>
												<xsl:choose>
													<xsl:when test="@uri">
														<xsl:variable name="newDB">
															<xsl:choose>
																<xsl:when test="substring-after(@uri, '//')">
																	<xsl:value-of select="substring-after(@uri, '//')" />
																</xsl:when>
																<xsl:otherwise>
																	-
																</xsl:otherwise> <!-- default value -->
															</xsl:choose>
														</xsl:variable>

														<xsl:variable name="system">
															<xsl:choose>
																<xsl:when test="contains($newDB, '/')">
																	<xsl:value-of select="substring-before($newDB, '/')" />
																</xsl:when>
																<xsl:otherwise>
																	-
																</xsl:otherwise> <!-- default value -->
															</xsl:choose>
														</xsl:variable>

														<xsl:variable name="package">
															<xsl:choose>
																<xsl:when
																	test="substring-before(substring-after($newDB, '/'), '/')">
																	<xsl:value-of
																		select="substring-before(substring-after($newDB, '/'), '/')" />
																</xsl:when>
																<xsl:when test="substring-after($newDB, '/')">
																	<xsl:value-of select="substring-after($newDB, '/')" />
																</xsl:when>
																<xsl:otherwise>
																	-
																</xsl:otherwise> <!-- default value -->
															</xsl:choose>
														</xsl:variable>

														<xsl:variable name="type">
															<xsl:choose>
																<xsl:when
																	test="substring-before(substring-after(substring-after($newDB, '/'), '/'), '/')">
																	<xsl:value-of
																		select="substring-before(substring-after(substring-after($newDB, '/'), '/'), '/')" />
																</xsl:when>
																<xsl:otherwise>
																	-
																</xsl:otherwise> <!-- default value -->
															</xsl:choose>
														</xsl:variable>

														<xsl:variable name="name">
															<xsl:choose>
																<xsl:when
																	test="substring-after(substring-after(substring-after(substring-after(substring-after(@uri, '/'), '/'), '/'), '/'), '/')">
																	<xsl:value-of
																		select="substring-after(substring-after(substring-after(substring-after(substring-after(@uri, '/'), '/'), '/'), '/'), '/')" />
																</xsl:when>
																<xsl:otherwise>
																	-
																</xsl:otherwise> <!-- default value -->
															</xsl:choose>
														</xsl:variable>

														<!-- URI Format -->
														<!-- newdb://system/package/type/name -->
														
														
														<xsl:choose>
															<!-- Mass Copy-->
															<xsl:when test="contains(translate(@type, $smallcase, $uppercase), 'COPY MODEL')"> 
															<!-- URI format : uri="/package/type/name"-->
															
																<xsl:variable name="CopyModelsName">
																	<xsl:choose>
																		<xsl:when test="substring-after(substring-after(substring-after(@uri, '/'), '/'), '/')">
																			<xsl:value-of
																				select="substring-after(substring-after(substring-after(@uri, '/'), '/'), '/')" />
																		</xsl:when>
																		<xsl:otherwise>
																			-
																		</xsl:otherwise> <!-- default value -->
																	</xsl:choose>
																</xsl:variable>
																<xsl:variable name="CopyModelsPackage">
																	<xsl:choose>
																		<xsl:when test="substring-before(substring-after(@uri, '/'), '/')">
																			<xsl:value-of
																				select="substring-before(substring-after(@uri, '/'), '/')" />
																		</xsl:when>
																		<xsl:otherwise>
																			-
																		</xsl:otherwise> <!-- default value -->
																	</xsl:choose>
																</xsl:variable>
																
																<xsl:variable name="CopyModelsType">
																	<xsl:choose>
																		<xsl:when test="substring-before(substring-after(substring-after(@uri, '/'), '/'), '/')">
																			<xsl:value-of
																				select="substring-before(substring-after(substring-after(@uri, '/'), '/'), '/')" />
																		</xsl:when>
																		<xsl:otherwise>
																			-
																		</xsl:otherwise> <!-- default value -->
																	</xsl:choose>
																</xsl:variable>
																
																<td>
																	<xsl:value-of select="$CopyModelsName" />
																</td>
																<td>
																	<xsl:value-of select="$CopyModelsType" />
																</td>
																<td>
																	<xsl:value-of select="$CopyModelsPackage" />
																</td>
																<td>
																	<xsl:value-of select="@result" />
																</td>
																<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
															</xsl:when>
															
															<!-- AutoDoc, Activation, Deletion, Export - Dev Mode, SAP Support, Migration, Validation,  -->
															<!-- Default: Displays type based on URI-->
															
															<xsl:otherwise>
																<td class="breakWord">
																	<xsl:value-of select="$name" />
																</td>
																<xsl:variable name="OtherWiseType">
																	<xsl:choose>
																		<xsl:when test="substring-before(substring-after(substring-after(substring-after(substring-after(@uri, '/'), '/'), '/'), '/'), '/')">
																			<xsl:call-template name="displayResourceType">
																				<xsl:with-param name="argument" select= "substring-before(substring-after(substring-after(substring-after(substring-after(@uri, '/'), '/'), '/'), '/'), '/')" />
																			</xsl:call-template>
																		</xsl:when>
																		
																		<xsl:otherwise>
																			-
																		</xsl:otherwise> <!-- default value -->
																	</xsl:choose>
																</xsl:variable>
																<td class="breakWord">
																	<xsl:value-of select="$OtherWiseType" />
																</td>
																<td class="breakWord">
																	<xsl:value-of select="$package" />
																</td>
																<td>
																	<xsl:value-of select="@result" />
																</td>
																<td><span style="color: #E8E8E8; font-size:1px  ;">.</span></td>
															</xsl:otherwise> <!-- default value -->
														</xsl:choose>
														
													</xsl:when>
													<xsl:otherwise>
														<td>-</td>
														<td>-</td>
														<td>-</td>
														<td>-</td>
														<td>-</td>
													</xsl:otherwise>
												</xsl:choose>

											</xsl:otherwise>
										</xsl:choose>
									</tr>
								</xsl:for-each>

							</table>
						</td>
					</tr>

					<tr>
						<td />
						<td />
					</tr>
					<tr>
						<th class="row" width="13%">Detailed Report</th>
						<th class="row">
							<span style="color: #E8E8E8; font-size:1px  ;">.</span>
						</th>
					</tr>

					<!-- Invoking other templates -->
					<tr>
						<td />
						<td>
							<ul class="noindent">
								<xsl:apply-templates select="modelerjob/executioninfo/message">
									<xsl:with-param name="loop">
										firstTime
									</xsl:with-param>
								</xsl:apply-templates>
							</ul>
						</td>
					</tr>
				</table>
			</body>
		</html>
	</xsl:template>

	<xsl:template name="displayResourceType">
		<xsl:param name="argument" />
		<xsl:choose>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'ANALYTICVIEW')">Analytic View</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'ATTRIBUTEVIEW')">Attribute View</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'CALCULATIONVIEW')">Calculation View</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'ANALYTICPRIVILEGE')">Analytic Privilege</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'SQLFUNCTION')">Procedure</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'PROCEDURE')">Procedure</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'HDB_PROCEDURE')">Stored Procedure</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'HDBTABLEFUNCTION')">Table Function</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'HDBTABLE')">Database Table</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'DECISIONTABLE')">Decision Table</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'EXTERNAL_DATABASE_VIEW')">Database View</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'DS_DATAFLOW')">Dataflow</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'TABLE')">Table</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'PACKAGE')">Package</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'DATAFOUNDATION')">Data Foundation</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'SEARCHRULESET')">Search Rule Set</xsl:when>
			<xsl:when test="contains(translate($argument, $smallcase, $uppercase), 'CALCULATIONVIEWWEB')">Calculation View</xsl:when>
			<xsl:otherwise><xsl:value-of select="$argument" /></xsl:otherwise>
		</xsl:choose>
	</xsl:template>

	<xsl:template match="message">
		<xsl:param name="loop" />


		<xsl:variable name="messageInfoNodeValue">
			<xsl:value-of select="info" />
		</xsl:variable>


		<xsl:variable name="fontColor">
			<xsl:choose>
				<xsl:when test="translate(status, $smallcase, $uppercase) = 'ERROR'">color:#FF0000</xsl:when>
				<xsl:otherwise>color:#585858</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>

		<li style="{$fontColor}">
			<xsl:choose>
				<xsl:when test="contains($messageInfoNodeValue, '?>')">
					<xsl:call-template name="processXML">
						<xsl:with-param name="XMLContent" select="$messageInfoNodeValue" />
					</xsl:call-template>
				</xsl:when>
				<xsl:otherwise>
					<xsl:value-of select="$messageInfoNodeValue" />
				</xsl:otherwise>
			</xsl:choose>
			
			<!-- Recursive Call -->
			<xsl:if test="message">
				<ul class="tree">
					<xsl:apply-templates select="message">
						<xsl:with-param name="loop">
							recursive
						</xsl:with-param>
					</xsl:apply-templates>
				</ul>
			</xsl:if>
		</li>

	</xsl:template>

	<xsl:template name="processXML">
		<xsl:param name="XMLContent" />
		<xsl:if test="(contains($XMLContent,':'))">
			<xsl:value-of select="substring-before($XMLContent, ':')" />
			:

			<xsl:variable name="actualXML">
				<xsl:value-of select="substring-after($XMLContent, ':')" />
			</xsl:variable>

			<xsl:variable name="actualXMLCopy">
				<xsl:copy-of select="$actualXML" />
			</xsl:variable>

			<DIV>
				<xsl:call-template name="IndentXML">
					<xsl:with-param name="plainXML" select="$actualXMLCopy" />
				</xsl:call-template>
			</DIV>
		</xsl:if>
	</xsl:template>

	<xsl:template name="IndentXML">
		<xsl:param name="plainXML" />
		<xsl:call-template name="break">
			<xsl:with-param name="text" select="$plainXML" />
		</xsl:call-template>
	</xsl:template>

	<xsl:template name="break">
		<xsl:param name="text" select="." />
		<xsl:choose>
			<xsl:when test="contains($text, '&gt;')">
				<xsl:variable name='value'>
					<xsl:value-of select="concat(substring-before($text, '&gt;'),'>')" />
				</xsl:variable>

				<xsl:choose>
					<xsl:when test="(contains($value,'xml'))">
						<span style="color: RoyalBlue;">
							<xsl:value-of select="$value" />
						</span>
					</xsl:when>
					<xsl:otherwise>
						<span style="color: Sienna;">
							<xsl:value-of select="$value" />
						</span>
					</xsl:otherwise>
				</xsl:choose>

				<!-- Break Line -->
				<br />

				<!--Recursive call -->
				<xsl:call-template name="break">
					<xsl:with-param name="text" select="substring-after($text,'&gt;')" />
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:value-of select="$text" />
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>

</xsl:stylesheet>
